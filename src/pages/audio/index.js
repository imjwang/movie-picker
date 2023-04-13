import Sheet from "@/components/Sheet";
import { supabase } from "@/lib/supabaseClient";
import { useState, useEffect, useRef } from "react";
import NavBar from "@/components/NavBar";

const AudioPage = () => {
  const ref = useRef(null);
  let stream = null;

  const getMedia = async (constraints) => {
    try {
      stream = await navigator.mediaDevices.getUserMedia(constraints);
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
    }
  };

  const constraints = {
    audio: true,
  };

  getMedia(constraints);

  const handleCLick = () => {
    if (stream) {
      const audioTracks = stream.getAudioTracks();
      audioTracks.forEach((track) => track.stop());
    }
  };

  return (
    <>
      <NavBar />
      <button className="btn btn-primary" onClick={handleCLick}>
        stop
      </button>
      <Sheet>
        <audio ref={ref} controls />
      </Sheet>
    </>
  );
};
export default AudioPage;
