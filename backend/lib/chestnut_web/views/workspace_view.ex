defmodule ChestnutWeb.WorkspaceView do
  use ChestnutWeb, :view

  def render("index.json", %{messenger: messenger}) do
    %{title: messenger}
  end
end