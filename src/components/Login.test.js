import '@testing-library/jest-dom';
import { fireEvent, render, screen } from "@testing-library/react"
import LoginForm from './LoginFormSide'

test('seharusnya ada welcome', () => {
    render(<LoginForm />);
    const welcomeTitle = screen.getByTitle("welcome")
    expect(welcomeTitle).toBeInTheDocument()
})

test('seharusnya ada tempat input email', () => {
    render(<LoginForm />);
    const inputEmail = screen.getByTestId("email")
    expect(inputEmail).toBeInTheDocument()
})

test('seharusnya ada tempat input password', () => {
    render(<LoginForm />);
    const inputPassword = screen.getByTestId("password")
    expect(inputPassword).toBeInTheDocument()
})

test('harusnya ada button', () => {
    render(<LoginForm />);
    const buttonInput = screen.getByText(/sign in/i)
    expect(buttonInput).toBeInTheDocument()
})