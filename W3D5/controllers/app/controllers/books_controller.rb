class BooksController < ApplicationController
  def index
    # your code here
    @books = Book.all

    render :index
  end

  def new
    # your code here
    render :new
  end

  def create #causes 500 error
    # your code here
    # new_book = Book.new(book_params)
    #
    # if new_book.save
    #   redirect_to books_url
    # else
    #   render json: new_book.errors.full_messages status: :unprocessable_entity
    # end
  end

  def destroy #even the solution isn't working
    # your code here
    book = Book.find(params[:id])
    book.destroy
    # render json: @books
    redirect_to books_url #:index
    # fail #using this didn't work either
  end

  private
  def book_params
    params.require(:book).permit(:title, :author)
  end
end
