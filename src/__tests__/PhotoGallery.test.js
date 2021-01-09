import React from 'react';
import PhotoGallery from '../PhotoGallery';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from "react-dom";

describe('PhotoGallery', () => {
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
      
  it('renders without images', () => {
    act(() => {
        render(<PhotoGallery />, container);
    });

    expect(container).toMatchSnapshot()
    expect(container.textContent).toBe('No photos!');
  });
      
  it('renders with empty list of images', () => {
    act(() => {
        render(<PhotoGallery images={[]} />, container);
    });

    expect(container).toMatchSnapshot();
    expect(container.textContent).toBe('No photos!');
  })
    
  it('renders with images', () => {
    act(() => {
      render(<PhotoGallery images={[{'url': 'abc.com', 'caption': 'hello'}, {'url': 'hey.com', 'caption': 'cool'}]} />, container);
    });
    
    expect(container).toMatchSnapshot();
    expect(container.textContent).toBe('hello');
    expect(container.querySelector('img')).toBeTruthy();
  })
      
  it('clicking the image takes you to the next image & clicking last image takes you to the first image', () => {
    act(() => {
      render(<PhotoGallery images={[{'url': 'abc.com', 'caption': 'Picture 1'}, {'url': 'hey.com', 'caption': 'Picture 2'}]} />, container);
    });

    const image = container.querySelector('img');

    expect(container).toMatchSnapshot();
    expect(container.textContent).toBe('Picture 1');

    act( () => {
    image.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(container).toMatchSnapshot();
    expect(container.textContent).toBe('Picture 2');   
    
    act( () => {
    image.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(container.textContent).toBe('Picture 1');
  })
})