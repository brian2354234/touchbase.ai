import { MyContext } from "../../types/global";

export async function humanValidator(
  ctx: MyContext,
  next: Function
): Promise<void> {
  ctx.request.body = {
    ...ctx.request.body,
    name: ctx.request.body.name.toLowerCase()
  };
  await next();
}
