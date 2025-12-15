import styled from "styled-components";

export const Card = styled.article`
  background-color: hsl(0, 0%, 98%);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    transform: translateY(-8px);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 14rem;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(23, 23, 23, 0.6), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;

  ${Card}:hover & {
    opacity: 1;
  }
`;

export const DificultBadge = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 6px;
  top: 1rem;
  left: 1rem;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background-color: hsl(0, 93%, 34%);
  color: white;
  border-radius: 9999px;
`;

export const Content = styled.div`
  padding: 1.5rem;
`;

export const Title = styled.h3`
  font-family: "Playfair Display", serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: hsl(0, 0%, 9%);
  margin-bottom: 0.5rem;
  transition: color 0.2s ease;

  ${Card}:hover & {
    color: hsl(0, 93%, 34%);
  }
`;

export const Description = styled.p`
  color: hsl(0, 0%, 45%);
  font-family: "Lato", sans-serif;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
  color: hsl(0, 0%, 45%);
  margin-bottom: 1rem;
`;

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;

  svg {
    color: hsl(40, 100%, 51%);
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: hsl(0, 93%, 34%);
  background-color: hsl(40, 100%, 51%);
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: hsl(40, 100%, 45%);
  }
`;
