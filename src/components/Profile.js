import React, { useEffect, useState } from 'react';
import { FaBuilding, FaMapMarkerAlt, FaLinkedin, FaYoutube, FaEnvelope, FaGithub } from 'react-icons/fa';

const GitHubProfile = () => {
  const [profileData, setProfileData] = useState({});
  const [repos, setRepos] = useState([]);
  const GITHUB_API_URL = 'https://api.github.com/users/Itsayush30';
  const REPOS_API_URL = 'https://api.github.com/users/Itsayush30/repos';

  useEffect(() => {
    // Fetch user data
    fetch(GITHUB_API_URL)
      .then((response) => response.json())
      .then((data) => {
        setProfileData(data);
      })
      .catch((error) => console.error('Error fetching data from GitHub API:', error));

    // Fetch user repositories
    fetch(REPOS_API_URL)
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
      })
      .catch((error) => console.error('Error fetching repositories from GitHub API:', error));
  }, []);

  return (
    <div className="flex items-center justify-center bg-green-200 p-4 rounded-lg shadow-md">
      <div className="text-center">
        <img
          src={profileData.avatar_url}
          alt="GitHub Avatar"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h2 className="text-xl font-semibold text-green-800">{profileData.name}</h2>
        <p className="text-green-600">{profileData.bio}</p>
        <div className="mt-4 flex space-x-4">
          {profileData.company && (
            <p className="text-sm flex items-center">
              <FaBuilding className="text-green-800 mr-1" />
              {profileData.company}
            </p>
          )}
          {profileData.location && (
            <p className="text-sm flex items-center">
              <FaMapMarkerAlt className="text-green-800 mr-1" />
              {profileData.location}
            </p>
          )}
          <p className="text-sm">
            <strong className="text-green-800">Followers:</strong> {profileData.followers}
          </p>
          <p className="text-sm">
            <strong className="text-green-800">Following:</strong> {profileData.following}
          </p>
          <p className="text-sm">
            <strong className="text-green-800">Public Repositories:</strong>{' '}
            {profileData.public_repos}
          </p>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-green-800">Repositories:</h3>
          <ul className="text-green-600">
            {repos.map((repo) => (
              <li key={repo.id}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <a
            href={profileData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-600 transition duration-300 mr-2 inline-block"
          >
            <FaGithub className="inline-block mr-1" /> Visit GitHub Profile
          </a>
          <div className="mt-2">
            <a
              href="https://www.linkedin.com/in/itsayush30/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-600 transition duration-300 mr-2 inline-block"
            >
              <FaLinkedin className="inline-block mr-1" /> LinkedIn
            </a>
            <a
              href="https://www.youtube.com/channel/UC4_hJY5m2rY04gM4BlYYHLg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-600 transition duration-300 mr-2 inline-block"
            >
              <FaYoutube className="inline-block mr-1" /> YouTube
            </a>
            <a
              href="mailto:itsayush30@gmail.com"
              className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-600 transition duration-300 inline-block"
            >
              <FaEnvelope className="inline-block mr-1" /> Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubProfile;
