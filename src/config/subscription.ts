// config.ts

// Type for Subscription Tiers
export type SUBSCRIPTION_TIER = "FREE" | "GOLD" | "PLATINUM";

// Interface for Subscription Details
export interface SubscriptionConfig {
  tier: SUBSCRIPTION_TIER;
  maxProjects: number;
  chatModel: string;
}

// Subscription Details
export const subscriptions: { [key in SUBSCRIPTION_TIER]: SubscriptionConfig } =
  {
    FREE: { tier: "FREE", maxProjects: 3, chatModel: "gpt-3.5-turbo" },
    GOLD: { tier: "GOLD", maxProjects: 10, chatModel: "gpt-3.5-turbo" },
    PLATINUM: { tier: "PLATINUM", maxProjects: 30, chatModel: "gpt-4" },
  };

// Function to get subscription details by tier
export const getSubscriptionConfig = (
  tier: SUBSCRIPTION_TIER
): SubscriptionConfig => {
  return subscriptions[tier];
};
