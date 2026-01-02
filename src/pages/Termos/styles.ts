import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 92px;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 32px;
  color: #1a1a1a;
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

export const Section = styled.section`
  margin-bottom: 24px;
`;

export const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: #333;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: 12px;
`;

export const List = styled.ul`
  list-style: disc;
  padding-left: 24px;
  margin-bottom: 12px;
`;

export const ListItem = styled.li`
  font-size: 1rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: 4px;
`;