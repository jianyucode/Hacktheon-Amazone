class Api::DepartmentsController < ApplicationController
    before_action :set_user
    before_action :set_department

    def index
        render json: User.deparment.all
    end

    def create
        @department = User.deparment.new(deparment_params)
        if @department.save
            render json: @department
        else
            render json: {errors: @department.errors}, status: :unprocessable_entity
        end
    end

    def update
        @department = User.deparment.find(params[:id])
        if @department.update(deparment_params)
           render json: @department
        else
            render json: {errors: @department.errors}, status: :unprocessable_entity
        end 
    end

    def destroy
        User.department.find(params[:id]).destroy
        render json: {message: 'department deleted'}
    end


    private
    def deparment_params
        params.require(:deparment).permit(:title)
    end 

    def set_department
        @deparment = User.deparment.find(params[:id])
    end

    def set_user
        @user = User.find(params[:user_id])
    end

end
