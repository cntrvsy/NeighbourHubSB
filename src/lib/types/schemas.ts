import { z } from 'zod'

// Magic Link Schema
export const MagicLinkSchema = z.object({
  email: z.string().email().min(3)
})

export type MagicLinkSchema = typeof MagicLinkSchema;


// Magic Link OTP verify Schema
export const MagicLinkOTPVerifySchema = z.object({
  email: z.string().email().min(3),
  otp: z.string().min(6).max(6)
})

// Account Update Schema
export const AccountUpdateSchema = z.object({
  full_name: z.string().min(3).max(30),
  username: z.string().min(3).max(20),
  website: z.string().url(),
})

export type AccountUpdateSchema = typeof AccountUpdateSchema;

// Store Insert Schema
export const StoreInsertSchema = z.object({
  store_name: z.string().min(3).max(30),
  location: z.string().min(3).max(40),
  website: z.string().min(3).max(40),
})

export type StoreInsertSchema = typeof StoreInsertSchema;

// Store Update Schema
export const StoreUpdateSchema = z.object({
  store_name: z.string().min(3).max(30),
  location: z.string().min(3).max(20),
  website: z.string().min(3).max(40),
})

export type StoreUpdateSchema = typeof StoreUpdateSchema;

// Item Update Schema
export const ItemUpdateSchema = z.object({
  item_name: z.string().min(3).max(30),
  item_price: z.number().positive(),
  item_description: z.string().min(3).max(255),
  store_id: z.string().min(3).max(100),
})

export type ItemUpdateSchema = typeof ItemUpdateSchema;

// Item Insert Schema
export const ItemInsertSchema = z.object({
  item_name: z.string().min(3).max(30),
  item_price: z.number().positive(),
  item_description: z.string().min(3).max(255),
  store_id: z.string().min(3).max(100),
})

export type ItemInsertSchema = typeof ItemInsertSchema;

// List Insert Schema
export const ListInsertSchema = z.object({
  list_name: z.string().min(3).max(30)
})

export type ListInsertSchema = typeof ListInsertSchema;

// List Update Schema
export const ListUpdateSchema = z.object({
  list_name: z.string().min(3).max(30),
})

export type ListUpdateSchema = typeof ListUpdateSchema;

// List-Item Insert Schema
export const ListItemInsertSchema = z.object({
  list_id: z.string().min(3).max(100),
  item_id: z.string().min(3).max(100),
  quantity: z.number().positive(),
})

export type ListItemInsertSchema = typeof ListItemInsertSchema;
