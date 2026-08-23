import { render, screen } from '@testing-library/react';
import TaskCard from './TaskCard';

describe('TaskCard Component', () => {
  const mockTask = { id: '1', title: 'Test UI', description: 'Check rendering', status: 'To Do' };


  it('renders the task title correctly', () => {
    render(<TaskCard task={mockTask} onDragStart={() => {}} />);
    expect(screen.getByText('Test UI')).toBeDefined();
  });


  it('renders the task description correctly', () => {
    render(<TaskCard task={mockTask} onDragStart={() => {}} />);
    expect(screen.getByText('Check rendering')).toBeDefined();
  });


  it('has the draggable attribute enabled', () => {
    const { container } = render(<TaskCard task={mockTask} onDragStart={() => {}} />);
    const cardDiv = container.firstChild;
    expect(cardDiv.getAttribute('draggable')).toBe('true');
  });
});