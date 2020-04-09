import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  align-self: center;
  font-weight: bold;
  font-size: 18px;
  color: #fff;
  top: 15px;
`;

export const IssuesListContainer = styled.View`
  top: 40px;
  width: 90%;
  align-self: center;
`;

export const IssuesList = styled.View`
  height: 90%;
`;

export const IssueContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #0000001a;
  border-radius: 5px;
`;

export const IssueDesc = styled.Text`
  color: #999;
  font-size: 16px;
  font-weight: bold;
  width: 80%;
`;

export const IssueDate = styled.Text`
  color: #c1c1c1;
  font-size: 12px;
`;
