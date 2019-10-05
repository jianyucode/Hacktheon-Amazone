class Api::ProductsController < ApplicationController
    before_action :set_department
    before_action :set_product

  def index
    render json: Department.products.all
  end

  def create
    @product = Department.products.new(product_params)
    if @product.save
      render json: product
    else
      render json: {errors: product.errors}, status: :unprocessable_entity
    end
  end

  def update
    @product = Department.products.find(params[:id])
    @product.update(product_params)
    render json: product
  end

  def destroy
    Department.product.find(params[:id]).destroy
    render json: {message: "Product deleted"}
  end

  private

    def set_product
      @product = Department.products.find(params[:id])
    end

    def set_department
      @department = Department.find(params[:department_id, :user_id])
    end

    def product_params
      params.require(:product).permit(:name, :description, :price, :stock, :image_link)
    end

end
