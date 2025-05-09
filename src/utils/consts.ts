export const inputStyles = "w-full border p-2 text-sm bg-white rounded-lg border-zinc-200 focus-within-zinc-400 outline-none text-zinc-900";

export const routes = {
    dashboard: '/dashboard',
    events: '/dashboard/events',
    newEvent: '/dashboard/events/new',
    editEvent: '/dashboard/events/edit',
    event: '/dashboard/events/[id]',
}

export const tables = {
    events: 'events',
    users: 'users',
    attendees: 'attendees',
    categories: 'categories',
    eventCategories: 'event_categories',
}