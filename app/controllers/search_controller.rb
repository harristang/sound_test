class SearchController < ApplicationController
  def index

  end

  def search
    @songs = params[:tracks]
    puts @songs.first
  end

end
