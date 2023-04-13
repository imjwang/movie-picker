import Sheet from "@/components/Sheet";
import { supabase } from "@/lib/supabaseClient";
import { useState, useEffect, useRef } from "react";
import NavBar from "@/components/NavBar";

const AudioPage = () => {
  const ref = useRef(null);
  const [chunks, setChunks] = useState([]);
  let stream = null;
  let mediaRecorder = null;

  const getMedia = async (constraints) => {
    try {
      stream = await navigator.mediaDevices.getUserMedia(constraints);
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          setChunks([...chunks, e.data]);
        }
      };
      mediaRecorder.start();

      const audioTracks = stream.getAudioTracks();
      console.log("Using audio device: " + audioTracks[0].label);
      stream.oninactive = function () {
        console.log("Stream inactive");
      };
    } catch (e) {
      console.error("Error opening audio input stream: " + e);
    }

    const audio = ref.current;
    if (audio !== null) {
      audio.srcObject = stream;
      audio.onloadedmetadata = () => {
        audio.play();
      };
    }
  };

  const constraints = {
    audio: true,
  };

  const handleStop = () => {
    mediaRecorder.requestData();
    if (stream) {
      const audioTracks = stream.getAudioTracks();
      audioTracks.forEach((track) => track.stop());
      mediaRecorder.stop();
    }
  };

  const handleStart = () => {
    getMedia(constraints);
  };

  const handleDownload = async () => {
    const fileName = `record.webm`;

    const blob = new Blob(chunks, { type: "audio/webm" });

    const { error } = await supabase.storage
      .from("audio")
      .upload(fileName, blob);

    console.log(error);
  };

  return (
    <>
      <NavBar />
      <button className="btn btn-primary" onClick={handleStop}>
        stop
      </button>
      <button className="btn btn-secondary" onClick={handleStart}>
        start
      </button>
      <button className="btn btn-accent" onClick={handleDownload}>
        download
      </button>
      <Sheet>
        <audio ref={ref} controls />
      </Sheet>
    </>
  );
};
export default AudioPage;
