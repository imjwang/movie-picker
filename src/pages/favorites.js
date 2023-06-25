import React from 'react';

const Favorites = () => {
  const movies = [
    { title: 'Movie 1', releaseDate: '2022-01-01', genre: 'Action', description: 'This is a placeholder movie.' },
    { title: 'Movie 2', releaseDate: '2022-02-01', genre: 'Comedy', description: 'This is a placeholder movie.' },
    { title: 'Movie 3', releaseDate: '2022-03-01', genre: 'Drama', description: 'This is a placeholder movie.' },
    { title: 'Movie 4', releaseDate: '2022-04-01', genre: 'Thriller', description: 'This is a placeholder movie.' },
    { title: 'Movie 5', releaseDate: '2022-05-01', genre: 'Romance', description: 'This is a placeholder movie.' }
  ];

  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-4xl font-semibold mb-4'>Favorite Movies</h1>
      <table className='table-auto w-full'>
        <thead>
          <tr>
            <th className='px-4 py-2'>Title</th>
            <th className='px-4 py-2'>Release Date</th>
            <th className='px-4 py-2'>Genre</th>
            <th className='px-4 py-2'>Description</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-200' : ''}>
              <td className='border px-4 py-2'>{movie.title}</td>
              <td className='border px-4 py-2'>{movie.releaseDate}</td>
              <td className='border px-4 py-2'>{movie.genre}</td>
              <td className='border px-4 py-2'>{movie.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Favorites;