import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Login from './login';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { localStorage } from '@/storage';

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
  getAllKeys: jest.fn(),
}));

// Mock localStorage.viewAllAsyncStorageData
jest.mock('@/storage', () => ({
  localStorage: {
    viewAllAsyncStorageData: jest.fn(() => Promise.resolve([])),
  },
}));

const mockPush = jest.fn();
// Mock expo-router's useRouter
jest.mock('expo-router', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

describe('Login', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const { getAllByText, getByText } = render(<Login />);
    expect(getAllByText('Sign In').length).toBeGreaterThan(0);
    expect(getByText("Don't have an account? Click here to register")).toBeTruthy();
  });

  it('shows alert for incorrect email', async () => {
    jest.spyOn(Alert, 'alert');
    (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce(null);

    const { getByPlaceholderText, getAllByText } = render(<Login />);

    fireEvent.changeText(getByPlaceholderText('email'), 'nonexistent@example.com');
    fireEvent.changeText(getByPlaceholderText('Password'), 'password123');
    fireEvent.press(getAllByText('Sign In')[1]);

    await waitFor(() => {
      expect(Alert.alert).toHaveBeenCalledWith('Incorrect Email');
    });
  });

  it('shows alert for incorrect password', async () => {
    jest.spyOn(Alert, 'alert');
    const mockUser = {
      email: 'test@example.com',
      password: 'correctpassword',
      fullName: 'Test User',
    };
    (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce(JSON.stringify(mockUser));

    const { getByPlaceholderText, getAllByText } = render(<Login />);

    fireEvent.changeText(getByPlaceholderText('email'), 'test@example.com');
    fireEvent.changeText(getByPlaceholderText('Password'), 'wrongpassword');
    fireEvent.press(getAllByText('Sign In')[1]);

    await waitFor(() => {
      expect(Alert.alert).toHaveBeenCalledWith('Incorrect Password');
    });
  });

  it('navigates to home on successful login', async () => {
    const mockUser = {
      email: 'test@example.com',
      password: 'correctpassword',
      fullName: 'Test User',
    };
    (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce(JSON.stringify(mockUser));

    const { getByPlaceholderText, getAllByText } = render(<Login />);

    fireEvent.changeText(getByPlaceholderText('email'), 'test@example.com');
    fireEvent.changeText(getByPlaceholderText('Password'), 'correctpassword');
    fireEvent.press(getAllByText('Sign In')[1]);

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith({
        pathname: '/home',
        params: { userParam: JSON.stringify(mockUser) },
      });
    });
  });
});
