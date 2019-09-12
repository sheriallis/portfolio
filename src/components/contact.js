import React from "react"
import styled from "styled-components"

const Section = styled.section`
  padding: 80px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #5266df;
  color: #fff;
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

  label {
    margin-top: 30px;
    margin-bottom: 10px;
  }

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
    outline: none;
    border: 3px solid transparent;

    &:focus {
      border: 3px solid #222;
    }
  }
  textarea {
    height: 300px;
  }
  input[type="submit"] {
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    font-weight: 600;
    border-radius: 0.625rem;
    transition: background-color 0.2s ease-in;
    border: none;

    &:hover,
    &:active,
    &:focus {
      background-color: #222;
    }
  }
`

const Contact = () => (
  <Section id="contact">
    <Title>Get in Touch</Title>
    <FormWrapper>
      <Form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name..."
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email.."
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="enter your message..."
          required
        />
        <input type="submit" value="Send message" />
      </Form>
    </FormWrapper>
  </Section>
)

export default Contact
