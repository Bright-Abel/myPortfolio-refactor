import { createClient } from 'contentful';
import { useEffect, useState } from 'react';

const client = createClient({
  space: 'vnfkh95yi74c',
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
  const [project, setProject] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState('');

  const getData = async () => {
    try {
      const resp = await client.getEntries({ content_type: 'myProject' });
      const projects = resp.items.map((item) => {
        const { title, description, github, url, image, type } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, description, github, url, id, img, type };
      });
      setIsLoading(false);
      setProject(projects);
    } catch (error) {
      setIsLoading(false);
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { project, isLoading, isError };
};
