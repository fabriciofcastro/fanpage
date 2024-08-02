
// components/Avatar.tsx
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface AvatarProps {
  username: string;
}

const Avatar: React.FC<AvatarProps> = ({ username }) => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        setAvatarUrl(response.data.avatar_url);
      } catch (err) {
        setError('Erro ao carregar o avatar');
      }
    };

    fetchAvatar();
  }, [username]);

  if (error) {
    return <div>{ error }</div>;
  }

  return (
    <div className="rounded-s-md shadow-lg">
      { avatarUrl ? (
        <Image
          src={ avatarUrl }
          alt={ `Avatar de ${username}` }
          width={ 150 }
          height={ 180 }
          className="rounded-md"
        />
      ) : (
        <div>Carregando...</div>
      ) }
    </div>
  );
};

export default Avatar;
