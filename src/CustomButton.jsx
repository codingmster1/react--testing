import React, { useState } from "react";
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';


const CustomButton = ({ onClick }) => {
    return (
        <button onClick={onClick}>Click me</button>
    );
};

export default CustomButton;