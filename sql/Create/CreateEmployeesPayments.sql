create table EmployeesPayments (
	employeeId int  null,
	paymentId int  null,
	status nvarchar(10) not null default 'expectation',
	createDate datetime not null default getdate(),
	UNIQUE (employeeId, paymentId, createDate),
	CONSTRAINT [FK_EmployeesPayments_To_Employees] FOREIGN KEY(employeeId) REFERENCES Employees (employeeId) on delete set null,
	CONSTRAINT [FK_EmployeesPayments_To_Payments] FOREIGN KEY(paymentId) REFERENCES Payments (paymentId) on delete set null,
)