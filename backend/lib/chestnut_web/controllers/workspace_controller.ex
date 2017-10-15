defmodule ChestnutWeb.WorkspaceController do
  use ChestnutWeb, :controller

  def index(conn, %{"messenger"=> messenger}) do
    render conn, "index.json", messenger: messenger
  end
end