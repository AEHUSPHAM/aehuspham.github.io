import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: normal;
      filter: none;
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Multi-modality Large Language Models',
    'Multilingual Large Language Models',
    'Embedding and Retrieval Models',
    'Enhance LLM on specific task/domains',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello, I'm Huy Pham, an NLP Scientist with over two years of experience specializing
              in Large Language Models (LLMs). Currently, at{' '}
              <a href="https://zalo.ai/" target="_blank" rel="noreferrer">
                ZaloAI
              </a>
              , I'm responsible for developing models for Vietnamese language tasks, image
              captioning, dialogue systems, and model pre-training.
            </p>

            <p>
              I’ve co-developed{' '}
              <a
                href="https://huggingface.co/collections/vilm/vinallama-654a099308775ce78e630a6f"
                target="_blank"
                rel="noreferrer">
                VinaLLaMA
              </a>
              ,{' '}
              <a
                href="https://huggingface.co/collections/vilm/vietcuna-6549e67ce546b0737ec9931f"
                target="_blank"
                rel="noreferrer">
                Vietcuna
              </a>
              . These two model series are among the first Large Language Models in Vietnam . I'm
              also a co-author of{' '}
              <a
                href="https://aclanthology.org/2023.findings-eacl.79.pdf"
                target="_blank"
                rel="noreferrer">
                ViDeBERTa
              </a>
              , which was accepted at{' '}
              <a href="https://2023.eacl.org/" target="_blank" rel="noreferrer">
                EACL 2023.
              </a>
            </p>

            <p>
              I'm passionate about new technologies and innovative ideas, especially in Generative
              AI.
            </p>

            <p>Here are my research interests:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/aehus.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
