import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import DataContextProvider from "./context/DataContextProvider";

// Mock the lazy-loaded Map component
vi.mock("./components/Map", () => ({
  default: vi.fn(() => <div data-testid="mock-map">Mock Map</div>),
}));

describe("App Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the Suspense fallback while the Map component is loading", async () => {
    render(
      <DataContextProvider>
        <App />
      </DataContextProvider>
    );

    // Check that the fallback (loading) is shown initially
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();

    // Wait for lazy-loaded Map component to render
    await waitFor(() => screen.getByTestId("mock-map"));

    // Ensure the fallback is no longer visible
    expect(screen.queryByText(/Loading/i)).not.toBeInTheDocument();
  });

  it("renders the lazy-loaded Map component and children", async () => {
    render(
      <DataContextProvider>
        <App />
      </DataContextProvider>
    );

    // Wait for the Map component
    await waitFor(() => screen.getByTestId("mock-map"));

    // Verify rendered components
    expect(screen.getByTestId("mock-map")).toBeInTheDocument();
  });
});
