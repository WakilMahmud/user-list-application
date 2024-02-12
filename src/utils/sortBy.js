export function sortBy(users, filter) {
	if (filter.includes("company")) {
		const sortedUsers = [...users].sort((a, b) => {
			if (a.company.name < b.company.name) {
				return -1;
			} else if (a.company.name > b.company.name) {
				return 1;
			}
			return 0;
		});

		return sortedUsers;
	} else {
		const sortedUsers = [...users].sort((a, b) => {
			if (a[filter] < b[filter]) {
				return -1;
			} else if (a[filter] > b[filter]) {
				return 1;
			}
			return 0;
		});

		return sortedUsers;
	}
}
