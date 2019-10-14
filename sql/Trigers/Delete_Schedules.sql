CREATE TABLE DeltedShedle (
	serviceId int NOT NULL PRIMARY KEY,
    dayOfWeek int not null,
	startTime time not null,
	endTime time not null,
	startLunch time  null,
	endLunch time null,
	deleteDate datetime null
)


Go
 Create trigger Delete_Shedule 
 ON Shedule 
 For delete
 as 
   INSERT INTO DeltedShedle 
   (serviceId, dayOfWeek, startTime,endTime, startLunch, endLunch, deleteDate)
	SELECT serviceId, dayOfWeek, startTime,endTime,startLunch,endLunch, GETDATE() 
	 FROM deleted