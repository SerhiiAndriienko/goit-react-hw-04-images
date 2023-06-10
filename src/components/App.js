import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from './SearchBar/SearchBar';
import LoadMoreButton from './LoadMoreButton/LoadMoreButton';

const BASEURL =
  'https://pixabay.com/api/?key=35462061-8a52d4784631467a148110ba5&q=';

export default function App() {
  const [images, setImages] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(false);
  const [howManyImagesFound, setHowManyImagesFound] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      if (!searchQuery) {
        return;
      }
      setImages(null);
      setLoad(true);
      try {
        const response = await axios.get(
          `${BASEURL}${searchQuery.trim()}&image_type=photo&pretty=true&orientation=horizontal&safesearch=false&webformatURL=180&per_page=12&page=1`
        );
        const newImages = response.data.hits;

        if (response.data.hits.length === 0) {
          alert('Nothing found =`(');
          return;
        }

        setImages(prevImages =>
          prevImages ? [...prevImages, ...newImages] : newImages
        );
        setHowManyImagesFound(response.data.totalHits);
      } catch (error) {
        console.error(error);
      } finally {
        setLoad(false);
      }
    };
    fetchRequests();
  }, [searchQuery]);

  const nextPage = async () => {
    setLoad(true);
    setPage(prevPage => prevPage + 1);
    try {
      const response = await axios.get(
        `${BASEURL}${searchQuery.trim()}&image_type=photo&pretty=true&orientation=horizontal&safesearch=false&webformatURL=180&per_page=12&page=${
          page + 1
        }`
      );
      const newImages = response.data.hits;
      setImages(prevImages =>
        prevImages ? [...prevImages, ...newImages] : newImages
      );
      setHowManyImagesFound(response.data.totalHits);
    } catch (error) {
      console.error(error);
    } finally {
      setLoad(false);
    }
  };

  return (
    <div>
      <SearchBar onFormSubmit={setSearchQuery}></SearchBar>
      <main>
        <ImageGallery
          load={load}
          images={images}
          onClick={nextPage}
        ></ImageGallery>

        {images && howManyImagesFound - images.length > 12 ? (
          <LoadMoreButton onClick={nextPage}></LoadMoreButton>
        ) : (
          ''
        )}
      </main>
    </div>
  );
}
