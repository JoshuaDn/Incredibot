/**
 * Events sent by the Slack RTM API.
 *
 * NOTE: This file was auto-generated and should not be edited manually.
 */

module.exports.EVENTS = {
  ACCOUNTS_CHANGED: 'accounts_changed',
  COMMANDS_CHANGED: 'commands_changed',
  EMAIL_DOMAIN_CHANGED: 'email_domain_changed',
  EMOJI_CHANGED: 'emoji_changed',
  HELLO: 'hello',
  MANUAL_PRESENCE_CHANGE: 'manual_presence_change',
  MESSAGE: 'message',
  PREF_CHANGE: 'pref_change',
  PRESENCE_CHANGE: 'presence_change',
  BOT_ADDED: 'bot_added',
  BOT_CHANGED: 'bot_changed',
  CHANNEL_ARCHIVE: 'channel_archive',
  CHANNEL_CREATED: 'channel_created',
  CHANNEL_DELETED: 'channel_deleted',
  CHANNEL_HISTORY_CHANGED: 'channel_history_changed',
  CHANNEL_JOINED: 'channel_joined',
  CHANNEL_LEFT: 'channel_left',
  CHANNEL_MARKED: 'channel_marked',
  CHANNEL_RENAME: 'channel_rename',
  CHANNEL_UNARCHIVE: 'channel_unarchive',
  FILE_CHANGE: 'file_change',
  FILE_COMMENT_ADDED: 'file_comment_added',
  FILE_COMMENT_DELETED: 'file_comment_deleted',
  FILE_COMMENT_EDITED: 'file_comment_edited',
  FILE_CREATED: 'file_created',
  FILE_DELETED: 'file_deleted',
  FILE_PRIVATE: 'file_private',
  FILE_PUBLIC: 'file_public',
  FILE_SHARED: 'file_shared',
  FILE_UNSHARED: 'file_unshared',
  GROUP_ARCHIVE: 'group_archive',
  GROUP_CLOSE: 'group_close',
  GROUP_HISTORY_CHANGED: 'group_history_changed',
  GROUP_JOINED: 'group_joined',
  GROUP_LEFT: 'group_left',
  GROUP_MARKED: 'group_marked',
  GROUP_OPEN: 'group_open',
  GROUP_RENAME: 'group_rename',
  GROUP_UNARCHIVE: 'group_unarchive',
  IM_CLOSE: 'im_close',
  IM_CREATED: 'im_created',
  IM_HISTORY_CHANGED: 'im_history_changed',
  IM_MARKED: 'im_marked',
  IM_OPEN: 'im_open',
  MPIM_CLOSE: 'mpim_close',
  MPIM_JOINED: 'mpim_joined',
  MPIM_OPEN: 'mpim_open',
  PIN_ADDED: 'pin_added',
  PIN_REMOVED: 'pin_removed',
  REACTION_ADDED: 'reaction_added',
  REACTION_REMOVED: 'reaction_removed',
  STAR_ADDED: 'star_added',
  STAR_REMOVED: 'star_removed',
  TEAM_DOMAIN_CHANGE: 'team_domain_change',
  TEAM_JOIN: 'team_join',
  TEAM_MIGRATION_STARTED: 'team_migration_started',
  TEAM_PLAN_CHANGE: 'team_plan_change',
  TEAM_PREF_CHANGE: 'team_pref_change',
  TEAM_RENAME: 'team_rename',
  USER_CHANGE: 'user_change',
  USER_TYPING: 'user_typing',
};

module.exports.MESSAGE_SUBTYPES = {
  BOT_MESSAGE: 'bot_message',
  ME_MESSAGE: 'me_message',
  PINNED_ITEM: 'pinned_item',
  UNPINNED_ITEM: 'unpinned_item',
  CHANNEL_ARCHIVE: 'channel_archive',
  CHANNEL_JOIN: 'channel_join',
  CHANNEL_LEAVE: 'channel_leave',
  CHANNEL_NAME: 'channel_name',
  CHANNEL_PURPOSE: 'channel_purpose',
  CHANNEL_TOPIC: 'channel_topic',
  CHANNEL_UNARCHIVE: 'channel_unarchive',
  FILE_COMMENT: 'file_comment',
  FILE_MENTION: 'file_mention',
  FILE_SHARE: 'file_share',
  GROUP_ARCHIVE: 'group_archive',
  GROUP_JOIN: 'group_join',
  GROUP_LEAVE: 'group_leave',
  GROUP_NAME: 'group_name',
  GROUP_PURPOSE: 'group_purpose',
  GROUP_TOPIC: 'group_topic',
  GROUP_UNARCHIVE: 'group_unarchive',
  MESSAGE_CHANGED: 'message_changed',
  MESSAGE_DELETED: 'message_deleted',
};
