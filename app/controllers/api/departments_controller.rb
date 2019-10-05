class Api::DepartmentsController < ApplicationController
    before_action :set_department, only: [:update, :destroy]
    before_action :authenticate_user!

    def index
        render json: current_user.departments.all
    end

    def create
        @department = current_user.departments.new(department_params)
        if @department.save
            render json: @department
        else
            render json: {errors: @department.errors}, status: :unprocessable_entity
        end
    end

    def update
        if @department.update(department_params)
           render json: @department
        else
            render json: {errors: @department.errors}, status: :unprocessable_entity
        end 
    end

    def destroy
        @department.destroy
        render json: {message: 'department deleted'}
    end


    private
    def department_params
        params.require(:department).permit(:title)
    end 

    def set_department
        @department = current_user.departments.find(params[:id])
    end

    

end
