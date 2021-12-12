import channelsType from "../tables/channelsType.table.js";

export interface channelsTypeInterface {
    id: number,
    name: string,
    channelID: string,
    add_by: string,
    created_at: number,
}

export async function get(name: string) {
    const result = await channelsType.query
        .where("name", name)
        .select()
        .then(data => {
            return data;
        })

    return result;
}

export async function insert(name: string, channelID: string, userID: string) {
    const result = await channelsType.query
        .insert({
            name,
            channelID,
            add_by: userID,
        })
        .then(data => {
            return data;
        })

    return result;
}