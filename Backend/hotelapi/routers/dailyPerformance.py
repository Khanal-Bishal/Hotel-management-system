from fastapi import APIRouter

from hotelapi.database import daily_performance_table, database
from hotelapi.models.dailyPerformance import (
    DailyPerformance,  # Pydantic model for request/response
)

router = APIRouter(
    prefix="/dailyPerformance",
    tags=["DailyPerformance"]
)

# ✅ POST → Save to DB


@router.post("/")
async def write_daily_performance(dailyPerformance: DailyPerformance):
    """
    POST /dailyPerformance
    -> create daily performance for departments
    """
    query = daily_performance_table.insert().values(
        date=dailyPerformance.date,
        culinary=dailyPerformance.culinary,
        housekeeping=dailyPerformance.housekeeping,
        hr=dailyPerformance.hr,
        administration=dailyPerformance.administration,
    )

    record_id = await database.execute(query)

    return {
        "message": "Daily performance saved successfully",
        "id": record_id
    }


# ✅ GET → Fetch all from DB
@router.get("/")
async def get_daily_performance():
    """
    GET /dailyPerformance
    -> get daily performance for dashboard
    """
    query = daily_performance_table.select()
    results = await database.fetch_all(query)

    return results


# ✅ GET → Fetch single record by ID
@router.get("/{performance_id}")
async def get_single_daily_performance(performance_id: int):
    """
    GET /dailyPerformance/{performance_id}
    -> get a single daily performance record
    """
    query = daily_performance_table.select().where(
        daily_performance_table.c.id == performance_id)
    result = await database.fetch_one(query)

    if not result:
        from fastapi import HTTPException
        raise HTTPException(
            status_code=404, detail="Daily performance not found")

    return result
