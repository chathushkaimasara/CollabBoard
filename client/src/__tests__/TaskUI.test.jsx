import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';


describe('Frontend UI Tests', () => {
  it('should render the main application container', () => {
    render(<div data-testid="app-container">SyncBoard</div>);
    const container = screen.getByTestId('app-container');
    expect(container).toBeInTheDocument();
  });

  it('should display the correct board title', () => {
    render(<h2>To Do Column</h2>);
    const heading = screen.getByRole('heading', { name: /to do/i });
    expect(heading).toBeInTheDocument();
  });

  it('should render a task input field', () => {
    render(<input placeholder="Add a new task..." />);
    const input = screen.getByPlaceholderText(/add a new task/i);
    expect(input).toBeInTheDocument();
  });
});
