CREATE TABLE Shedule (
	sheduleId int primary key identity not null,
	serviceId int not null,
	dayOfWeek int not null CHECK(dayOfWeek > 0 and dayOfWeek <= 7),
	startTime time not null,
	endTime time not null,
	startLunch time null,
	endLunch time null,
	CONSTRAINT FK_Shedules_Serivces FOREIGN KEY (serviceId)  REFERENCES Services (serviceId),
	UNIQUE (serviceId, dayOfWeek)
)