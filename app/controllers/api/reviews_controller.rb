class Api::ReviewsController < ApplicationController
before_action :set_product
before_action :set_review

  def index
    render json: Product.reviews.all
  end

  def create
    @review = Product.review.new(review_params)
    if @review.save
      render json: review
    else
      render json: {errors: review.errors}, status: :unprocessable_entity
    end
  end

  def update
    @review = Product.reviews.find(params[:id])
    @review.update(review_params)
    render json: review
  end

  def destroy
    Product.review.find(params[:id]).destroy
    render json: {message: "Review deleted"}
  end

  private

    def set_review
        @review = Product.reviews.find(params[:id])
    end

    def set_product
        @product = Product.find(params[:product_id, :department_id])
    end

    def review_params
        params.require(:review).permit(:title, :body, :author, :rank, :rating, :date, :image_link)
    end

end
