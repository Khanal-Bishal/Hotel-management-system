from datetime import date

from pydantic import BaseModel


class DailyPerformance(BaseModel):
    date: str | date
    housekeeping: int
    culinary: int
    hr: int
    administration: int
