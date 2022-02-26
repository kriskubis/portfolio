import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: "yjtz3ucd",
    dataset: "production",
    apiVersion: "2022-02-01",
    useCdn: true,
    token: "skwFfYSWTgVJpVm0TPO6Sb4NGgdpy9WdylG0Q2AbsDxIUQYiXGO26VtlYkHGUIIBcf6HmCOxVbnMCc5kupM9FDDOwamCOS1pgcteDXgNp5a5yMvYquVk8YiT9ANKCnwpsISq9Xpo5tcFswURnz3Y3USaXAuhcZKX6on7mDEAdkN7lPgMDNEM"
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);