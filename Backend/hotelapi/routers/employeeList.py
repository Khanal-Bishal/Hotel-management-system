from fastapi.encoders import jsonable_encoder
from fastapi import APIRouter, HTTPException

from hotelapi.database import database, employee_table
from hotelapi.models.employeeList import Employee, EmployeeUpdate

router = APIRouter(
    prefix="/employees",
    tags=["Employees"]
)


# @router.post("/")
# async def create_employee(employee: Employee):
#     query = employee_table.insert().values(
#         name=employee.name,
#         jobTitle=employee.jobTitle,
#         employmentType=employee.employmentType,
#         department=employee.department,
#         office=employee.office,
#         email=employee.email,
#         phone=employee.phone,
#         shift=employee.shift,
#         attendance=employee.attendance,
#         performance=employee.performance,
#         total_work_hours=employee.total_work_hours,
#     )

#     employee_id = await database.execute(query)

#     return {
#         "message": "Employee created successfully",
#         "employee_id": employee_id,
#         "employee_name": employee.name
#     }


@router.post("/", response_model=Employee)
async def create_employee(employee: Employee):

    # ✅ converts nested Pydantic → dict
    employee_data = jsonable_encoder(employee)

    query = employee_table.insert().values(
        name=employee_data["name"],
        jobTitle=employee_data["jobTitle"],
        employmentType=employee_data["employmentType"],
        department=employee_data["department"],
        office=employee_data["office"],
        email=employee_data["email"],
        phone=employee_data["phone"],
        shift=employee_data["shift"],
        attendance=employee_data["attendance"],   # ✅ now pure dict
        performance=employee_data["performance"],  # ✅ now pure dict
        total_work_hours=employee_data["total_work_hours"],
    )

    employee_id = await database.execute(query)

    return {
        "id": employee_id,
        **employee_data
    }


# POST /employees -creating employee

@router.get("/")
async def get_all_employees():
    query = employee_table.select()
    employees = await database.fetch_all(query)
    return employees


@router.get("/{employee_id}")
async def get_single_employee(employee_id: int):
    query = employee_table.select().where(employee_table.c.id == employee_id)
    employee = await database.fetch_one(query)

    if not employee:
        raise HTTPException(
            status_code=404,
            detail="Employee not found"
        )

    return employee


@router.delete("/{employee_id}")
async def delete_employee(employee_id: int):
    query = employee_table.select().where(employee_table.c.id == employee_id)
    employee = await database.fetch_one(query)

    if not employee:
        raise HTTPException(
            status_code=404,
            detail="Employee not found"
        )

    delete_query = employee_table.delete().where(employee_table.c.id == employee_id)
    await database.execute(delete_query)

    return {
        "message": f"Employee with id {employee_id} deleted successfully"
    }


@router.put("/{employee_id}")
async def update_employee(employee_id: int, employee_data: EmployeeUpdate):

    query = employee_table.select().where(employee_table.c.id == employee_id)
    employee = await database.fetch_one(query)

    if not employee:
        raise HTTPException(status_code=404, detail="Employee not found")

    update_query = (
        employee_table
        .update()
        .where(employee_table.c.id == employee_id)
        .values(**employee_data.dict(exclude_unset=True))
    )

    await database.execute(update_query)

    return {
        "message": "Employee updated successfully",
        "employee_id": employee_id
    }
