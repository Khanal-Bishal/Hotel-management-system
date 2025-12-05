import databases
import sqlalchemy
from sqlalchemy import engine

from hotelapi.config import config

# Metadata
metadata = sqlalchemy.MetaData()


shift_enum = sqlalchemy.Enum("morning", "evening", name="shift_type")
department_enum = sqlalchemy.Enum(
    "culinary", "administration", "housekeeping", "hr", name="department_type"
)

employee_table = sqlalchemy.Table(
    "employees",
    metadata,

    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True, index=True),
    sqlalchemy.Column("name", sqlalchemy.String(100), nullable=False),
    sqlalchemy.Column("jobTitle", sqlalchemy.String(100), nullable=False),
    sqlalchemy.Column("employmentType", sqlalchemy.String(50), nullable=False),

    sqlalchemy.Column("department", department_enum, nullable=False),
    sqlalchemy.Column("office", sqlalchemy.String(100), nullable=False),
    sqlalchemy.Column("email", sqlalchemy.String(120),
                      unique=True, nullable=False),
    sqlalchemy.Column("phone", sqlalchemy.String(30), nullable=False),

    sqlalchemy.Column("shift", shift_enum, nullable=False),

    sqlalchemy.Column("attendance", sqlalchemy.JSON, nullable=True),
    sqlalchemy.Column("performance", sqlalchemy.JSON, nullable=True),

    sqlalchemy.Column("total_work_hours", sqlalchemy.Integer, nullable=True),
)


daily_performance_table = sqlalchemy.Table(
    "daily_performance",
    metadata,

    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True, index=True),
    sqlalchemy.Column("date", sqlalchemy.String, nullable=False),

    sqlalchemy.Column("culinary", sqlalchemy.Integer),
    sqlalchemy.Column("housekeeping", sqlalchemy.Integer),
    sqlalchemy.Column("hr", sqlalchemy.Integer),
    sqlalchemy.Column("administration", sqlalchemy.Integer),
)

engine = sqlalchemy.create_engine(
    config.DATABASE_URL, connect_args={"check_same_thread": False}
)

metadata.create_all(engine)

database = databases.Database(
    config.DATABASE_URL,
    force_rollback=config.DB_FORCE_ROLL_BACK,
)
