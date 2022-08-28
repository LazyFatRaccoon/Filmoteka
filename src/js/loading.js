import { Loading } from 'Notiflix';

export function notiflixLoading() {
    Loading.dots({
      svgColor: 'rgba(255,107,1)',
      svgSize: '200px',
    });
  };
  
export function notiflixLoadingRemove() {
Loading.remove();
};