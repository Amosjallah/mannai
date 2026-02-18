'use client';

import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
  onLoad?: () => void;
  style?: React.CSSProperties;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  loading,
  objectFit = 'cover',
  objectPosition = 'center',
  onLoad,
  style,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
  };

  // Determine loading strategy
  const loadingStrategy = loading || (priority ? 'eager' : 'lazy');
  const fetchPriority = priority ? 'high' : 'auto';

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ width, height, ...style }}
    >
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loadingStrategy}
        fetchPriority={fetchPriority as 'high' | 'auto' | 'low'}
        decoding="async"
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${objectFit === 'cover' ? 'object-cover' : ''} ${objectFit === 'contain' ? 'object-contain' : ''}`}
        style={{
          objectFit,
          objectPosition,
          width: width ? `${width}px` : '100%',
          height: height ? `${height}px` : '100%',
        }}
        onLoad={handleLoad}
        onError={handleError}
      />
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <span className="text-gray-400 text-sm">Image not available</span>
        </div>
      )}
    </div>
  );
}

