from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from hotelapi.database import database
from hotelapi.routers.dailyPerformance import router as daily_performance_router
from hotelapi.routers.employeeList import router as employee_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(employee_router)
app.include_router(daily_performance_router)


@app.get("/", )
async def root():
    return {"message": "Employee API is running"}


@app.on_event("startup")
async def startup():
    await database.connect()


@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()
