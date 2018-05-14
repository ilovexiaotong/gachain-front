// Copyright 2017 The gachain-front Authors
// This file is part of the gachain-front library.
// 
// The gachain-front library is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// The gachain-front library is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU Lesser General Public License for more details.
// 
// You should have received a copy of the GNU Lesser General Public License
// along with the gachain-front library. If not, see <http://www.gnu.org/licenses/>.

declare module 'gachain/notifications' {
    type TNotificationRenderer<P> =
        ((params: P) => React.ReactNode) |
        React.ReactNode;

    interface INotificationProto<P> {
        icon: string;
        title: TNotificationRenderer<P>;
        body: TNotificationRenderer<P>;
    }

    interface INotification {
        id: string;
        type: string;
        params: {
            [key: string]: any;
        }
    }
}