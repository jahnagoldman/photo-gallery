import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from "react-dom";
import Photo from '../Photo';

describe('Photo', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });
      
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
      
  it('renders the photo blank state', () => {
    act(() => {
        render(<Photo />, container);
    });

    expect(container).toMatchSnapshot();
    expect(container.textContent).toBe('No photo.');
    expect(container.querySelector('img')).toBeFalsy();
  });

  it('renders the photo with image, no caption', () => {
    act(() => {
        render(<Photo image={{'url': 'abc.com'}}/>, container);
    });

    expect(container).toMatchSnapshot();
    expect(container.textContent).toBe('');
    expect(container.querySelector('img')).toBeTruthy();
  });

  it('renders the photo with caption, no image.', () => {
    act(() => {
        render(<Photo image={{'caption': 'pic 1'}}/>, container);
    });

    expect(container).toMatchSnapshot();
    expect(container.textContent).toBe('No photo.pic 1');
    expect(container.querySelector('img')).toBeFalsy();
  });

  it('renders the photo with caption and image.', () => {
    act(() => {
        render(<Photo image={{'url': 'abc.com', 'caption': 'pic 1'}}/>, container);
    });

    expect(container).toMatchSnapshot();
    expect(container.textContent).toBe('pic 1');
    expect(container.querySelector('img')).toBeTruthy();
  });
})