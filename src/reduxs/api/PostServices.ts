import { apiService, RTKResponse } from "@reduxs/api/apiService";
import { EndPoints } from "@reduxs/api/endpoints";
import { Post } from "@reduxs/types";

export const PostServices = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => EndPoints.POSTS,
      transformResponse: (response: RTKResponse<Post[]>) => response.data,
      providesTags: ["POSTS"],
    }),
    deletePost: builder.mutation<void, number>({
      query: (id: number) => ({
        url: EndPoints.POSTS + "/" + id,
        method: "DELETE",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled; // Chờ cho đến khi query hoàn tất
          // Nếu thành công (không có lỗi), invalidating các tags
          dispatch(apiService.util.invalidateTags(["POSTS"]));
        } catch (err) {
          // Nếu có lỗi, không làm gì cả
          console.error("Add user failed: ", err);
        }
      },
    }),
  }),
  overrideExisting: true,
});

export const { useGetPostsQuery, useDeletePostMutation } = PostServices;
