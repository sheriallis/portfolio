import React from "react"
import styled from "styled-components"

const Section = styled.section`
  padding: 80px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Title = styled.h2``

const FormWrapper = styled.div`
  width: 100%;
  max-width: 700px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;

  input,
  select,
  textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
  }
  textarea {
    height: 300px;
  }
  input[type="submit"] {
    padding: 20px;
    background-color: #222;
    color: #fff;
    font-weight: 600;
    border-radius: 0.625rem;
    transition: background-color 0.2s ease-in;

    &:hover,
    &:active,
    &:focus {
      background-color: #5266df;
    }
  }
`

const Contact = () => (
  <Section id="contact">
    <Title>Get in Touch</Title>
    <FormWrapper>
      <Form>
        <label htmlFor="name">
          Name:
          <input type="text" id="name" name="name" placeholder="Your name..." />
        </label>
        <label htmlFor="email">
          Your email:
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email.."
          />
        </label>
        <label htmlFor="message">Your message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="enter your message..."
        />
        <input type="submit" value="Send message" />
      </Form>
    </FormWrapper>
  </Section>
)

export default Contact
