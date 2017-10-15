defmodule ChestnutWeb.Router do
  use ChestnutWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", ChestnutWeb do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
  end

  scope "/api", ChestnutWeb do
    pipe_through :api
    get "/workspaces/:messenger", WorkspaceController, :index
  end

  # Other scopes may use custom stacks.
  # scope "/api", ChestnutWeb do
  #   pipe_through :api
  # end
end
