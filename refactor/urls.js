// Refactor this code

function getURL(dev = false, tasks = {}, status = 'ACTIVE', size = '20') {
    let baseUrl = '/tasks';
    let queryParams = new URLSearchParams();

    if (dev) {
        queryParams.append('status', status);
        queryParams.append('dev', 'true');
        queryParams.append('size', size);
    }

    if (tasks.nextTasks) {
        queryParams.append('hasNext', 'true');
    }

    if (tasks.prevTasks) {
        queryParams = new URLSearchParams();
        queryParams.append('hasPrev', 'true');
    }

    let url = `${baseUrl}${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
    return { url };
}
