import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: #fafafa;
  padding: 3rem 1rem;
  margin-top: 92px;

  @media (min-width: 640px) {
    padding: 3rem 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 3rem 2rem;
  }
`;

export const Content = styled.div`
  max-width: 48rem;
  margin: 0 auto;
`;

export const BackLink = styled.a`
  color: #16a34a;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 2rem;
  font-size: 0.95rem;
  transition: color 0.2s;

  &:hover {
    text-decoration: underline;
    color: #15803d;
  }
`;

export const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 2rem;
`;

export const SectionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Section = styled.section`
  color: #6b7280;
  line-height: 1.6;
`;

export const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

export const Paragraph = styled.p`
  margin-bottom: 0.5rem;
`;

export const List = styled.ul`
  list-style: disc;
  list-style-position: inside;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const ListItem = styled.li``;

export const Highlight = styled.p`
  font-weight: 500;
  margin-top: 0.5rem;
`;