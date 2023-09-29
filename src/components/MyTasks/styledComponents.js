import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  background-color: #131213;
  display: flex;
  flex-direction: row;
`
export const FormContainer = styled.form`
  width: 35vw;
  background-color: #131213;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
`
export const Heading = styled.h1`
  font-size: 30px;
  font-family: 'Roboto';
  font-weight: 500;
  color: #f3aa4e;
`
export const TagsAndTaskContainer = styled.div`
  background-color: #000000;
  width: 65vw;
  padding: 40px 20px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-bottom: 30px;
`
export const InputElement = styled.input`
  height: 40px;
  outline: none;
  border-radius: 8px;
  border: 0px;
  font-family: 'Roboto';
  color: #000000;
  font-size: 18px;
  padding: 2px 10px;
`
export const LabelElement = styled.label`
  font-family: 'Roboto';
  font-weight: 500;
  color: #ffffff;
  font-size: 20px;
  margin-bottom: 10px;
`
export const AddTaskButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #f3aa4e;
  color: #ffffff;
  font-weight: 600;
  font-size: 14px;
  border: 0px;
  outline: none;
  border-radius: 8px;
  margin-top: 20px;
  cursor: pointer;
`
export const TagsTitle = styled(Heading)`
  color: #ffffff;
`

export const TasksItems = styled.ul`
  list-style-type: none;
  margin: 0px;
  padding: 0px;
`
export const NoTaskText = styled.p`
  font-size: 25px;
  color: #fff;
  font-weight: 500;
  font-family: 'Roboto';
  text-align: center;
  margin-top: 200px;
`
export const TagsList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  padding: 0px;
`
