create table ComplaintsEmployees (
	complaintId int not null,
	employeeId int null,
	descriptionReason nvarchar(max) not null,
	created_at datetime not null default getdate(),
	CONSTRAINT [FK_ComplaintsEmployees_To_Complaints] FOREIGN KEY(complaintId) REFERENCES Complaints (complaintId),
	CONSTRAINT [FK_ComplaintsEmployees_To_Employess] FOREIGN KEY(employeeId) REFERENCES Employees (employeeId),
)