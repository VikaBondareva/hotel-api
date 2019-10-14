create table Complaints (
	complaintId int not null primary key identity,
	clientId int not null,
	countComplaints int not null default 0,
	UNIQUE (complaintId, clientId),
	CONSTRAINT [FK_Complaints_To_Clients] FOREIGN KEY(clientId) REFERENCES Clients (clientId),
)